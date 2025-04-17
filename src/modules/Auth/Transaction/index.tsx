import React from "react"
import { DataTable } from "./components/DataTable"
import { useTransactions } from "./hooks/useTransactions"
import { useTransactionStore } from "./store/transactionStore"
import { columns } from "./components/DataTable/columns"


export default function TransactionPage() {
    const { search, setSearch, setPage, page } = useTransactionStore()
    const { data, isLoading, error } = useTransactions({ search })

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading transactions.</div>

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Transactions</h1>

            <DataTable data={data || []} columns={columns} search={search}
                setSearch={setSearch}
                page={page}
                setPage={setPage} />
        </div>
    )
}
