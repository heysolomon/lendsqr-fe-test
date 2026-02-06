import { Skeleton } from "@/components/ui/skeleton";

export function UserProfileSkeleton() {
    return (
        <div className="user-profile-layout">
            {/* Back button skeleton */}
            <div>
                <Skeleton className="user-profile-skeleton__back-btn" />
            </div>

            {/* Header skeleton */}
            <div className="user-profile-layout__header">
                <Skeleton className="user-profile-skeleton__title" />
                <div className="user-profile-layout__actions">
                    <Skeleton className="user-profile-skeleton__action-btn" />
                    <Skeleton className="user-profile-skeleton__action-btn" />
                </div>
            </div>

            {/* User header card skeleton */}
            <div className="user-header-card" style={{ paddingBottom: '40px' }}>
                <div className="user-header-card__info">
                    <Skeleton className="user-profile-skeleton__avatar skeleton--circle" />
                    <div className="user-header-card__details">
                        <div className="user-header-card__name-section">
                            <Skeleton className="user-profile-skeleton__name" />
                            <Skeleton className="user-profile-skeleton__id" />
                        </div>
                        <div className="user-header-card__tier-section">
                            <Skeleton className="user-profile-skeleton__tier-label" />
                            <Skeleton className="user-profile-skeleton__stars" />
                        </div>
                        <div className="user-header-card__bank-section">
                            <Skeleton className="user-profile-skeleton__amount" />
                            <Skeleton className="user-profile-skeleton__bank-details" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Content skeleton - Personal Information */}
            <div className="user-profile">
                <div className="user-profile__section">
                    <Skeleton className="user-profile-skeleton__section-title" />
                    <div className="user-profile__grid">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="user-profile__item">
                                <Skeleton className="user-profile-skeleton__label" />
                                <Skeleton className="user-profile-skeleton__value" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="user-profile__section">
                    <Skeleton className="user-profile-skeleton__section-title" />
                    <div className="user-profile__grid user-profile__grid--education">
                        {[...Array(7)].map((_, i) => (
                            <div key={i} className="user-profile__item">
                                <Skeleton className="user-profile-skeleton__label" />
                                <Skeleton className="user-profile-skeleton__value" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="user-profile__section">
                    <Skeleton className="user-profile-skeleton__section-title" />
                    <div className="user-profile__grid">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="user-profile__item">
                                <Skeleton className="user-profile-skeleton__label" />
                                <Skeleton className="user-profile-skeleton__value" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="user-profile__section">
                    <Skeleton className="user-profile-skeleton__section-title" />
                    <div className="user-profile__grid user-profile__grid--guarantor">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="user-profile__item">
                                <Skeleton className="user-profile-skeleton__label" />
                                <Skeleton className="user-profile-skeleton__value" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
