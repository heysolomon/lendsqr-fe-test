import { Skeleton } from "@/components/ui/skeleton";

export function UsersPageSkeleton() {
    return (
        <div className="users-page">
            {/* Title skeleton */}
            <Skeleton className="users-page-skeleton__title" />

            {/* Stats grid skeleton */}
            <div className="users-stats-grid">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="users-page-skeleton__card">
                        <Skeleton className="users-page-skeleton__card-icon skeleton--circle" />
                        <Skeleton className="users-page-skeleton__card-label" />
                        <Skeleton className="users-page-skeleton__card-value" />
                    </div>
                ))}
            </div>

            {/* Data table skeleton */}
            <div className="users-page-skeleton__table">
                {/* Table header */}
                <div className="users-page-skeleton__table-header">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="users-page-skeleton__table-header-cell" />
                    ))}
                </div>

                {/* Table rows */}
                {[...Array(10)].map((_, rowIndex) => (
                    <div key={rowIndex} className="users-page-skeleton__table-row">
                        {[...Array(6)].map((_, cellIndex) => (
                            <Skeleton key={cellIndex} className="users-page-skeleton__table-cell" />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
