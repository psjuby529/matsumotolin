create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  line_or_email text not null,
  region text not null,
  space_type text not null,
  area_ping text not null,
  budget_range text not null,
  has_floor_plan boolean not null default false,
  has_reference_images boolean not null default false,
  needs_full_house_planning boolean not null default false,
  needs_smart_home boolean not null default false,
  message text not null,
  status text not null default 'new',
  source text not null default 'website',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint leads_status_check check (
    status in ('new', 'contacted', 'qualified', 'closed')
  )
);

create index if not exists leads_created_at_idx
  on public.leads (created_at desc);

create index if not exists leads_status_created_at_idx
  on public.leads (status, created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_leads_updated_at on public.leads;
create trigger set_leads_updated_at
before update on public.leads
for each row
execute function public.set_updated_at();

alter table public.leads enable row level security;

-- Minimal RLS (Phase 2A):
-- 1) public can submit leads
drop policy if exists "public_can_insert_leads" on public.leads;
create policy "public_can_insert_leads"
on public.leads
for insert
to anon, authenticated
with check (true);

-- 2) no public read/update/delete; keep select/update for service role only
--    (service role bypasses RLS automatically)
