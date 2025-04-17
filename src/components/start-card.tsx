import { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export type StatCardProps = {
    title: string
    value: string | number
    trendIcon: ReactNode
    trendLabel: string
    trendVariant?: "outline" | "default" | "secondary" | "destructive" | null | undefined
    trendSummary: string
    trendSummaryIcon: ReactNode
    subtext: string
}

function StatCard({
    title,
    value,
    trendIcon,
    trendLabel,
    trendVariant = "outline",
    trendSummary,
    trendSummaryIcon,
    subtext,
}: StatCardProps) {
    return (
        <Card className="@container/card" data-slot="card">
            <CardHeader>
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {value}
                </CardTitle>
                <CardAction>
                    <Badge variant={trendVariant}>
                        {trendIcon}
                        {trendLabel}
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    {trendSummary} {trendSummaryIcon}
                </div>
                <div className="text-muted-foreground">{subtext}</div>
            </CardFooter>
        </Card>
    )
}

export default StatCard
