import { getSupabaseAdminClient } from "@/lib/supabase/server";
import type { LeadRow } from "@/types/lead";

export const dynamic = "force-dynamic";

async function getLeads(): Promise<LeadRow[]> {
  const supabase = getSupabaseAdminClient();
  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as LeadRow[];
}

export default async function AdminLeadsPage() {
  const leads = await getLeads();

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl text-ml-ivory">Leads（最小查詢頁）</h1>
      <p className="mt-3 text-sm text-ml-ivory/65">
        目前僅提供讀取確認，不含刪除操作，避免破壞歷史資料。
      </p>

      <div className="mt-8 overflow-x-auto rounded-xl border border-white/10 bg-ml-navy-900/25">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-white/10 text-ml-ivory/70">
            <tr>
              <th className="px-4 py-3">時間</th>
              <th className="px-4 py-3">姓名</th>
              <th className="px-4 py-3">電話</th>
              <th className="px-4 py-3">聯絡</th>
              <th className="px-4 py-3">區域</th>
              <th className="px-4 py-3">狀態</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td className="px-4 py-8 text-ml-ivory/55" colSpan={6}>
                  目前尚無 leads。
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-b border-white/6 text-ml-ivory/85">
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(lead.created_at).toLocaleString("zh-TW")}
                  </td>
                  <td className="px-4 py-3">{lead.name}</td>
                  <td className="px-4 py-3">{lead.phone}</td>
                  <td className="px-4 py-3">{lead.line_or_email}</td>
                  <td className="px-4 py-3">{lead.region}</td>
                  <td className="px-4 py-3">{lead.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
