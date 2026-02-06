import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfoCard from '@/components/pages/dashboard/users/users-info-card';

// Mock next/image
jest.mock('next/image', () => {
    const MockedImage = ({ src, alt, ...props }: { src: string; alt: string;[key: string]: unknown }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={typeof src === 'object' ? '/mock.png' : src} alt={alt} {...props} />
    );
    MockedImage.displayName = 'MockedImage';
    return MockedImage;
});

// Mock icon - using type assertion for StaticImport
const mockIcon = '/assets/icons/test.svg' as unknown as import('next/dist/shared/lib/get-img-props').StaticImport;

describe('UserInfoCard Component', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should render without crashing', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card')).toBeInTheDocument();
        });

        it('should display the title', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Active Users"
                    content="1,000"
                />
            );
            expect(screen.getByText('Active Users')).toBeInTheDocument();
        });

        it('should display the content value', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(screen.getByText('2,453')).toBeInTheDocument();
        });

        it('should render the icon wrapper', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card__icon-wrapper')).toBeInTheDocument();
        });

        it('should have pink icon variant by default', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card__icon-wrapper--pink')).toBeInTheDocument();
        });

        it('should apply purple icon variant', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="purple"
                    title="Active Users"
                    content="1,000"
                />
            );
            expect(document.querySelector('.user-info-card__icon-wrapper--purple')).toBeInTheDocument();
        });

        it('should apply orange icon variant', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="orange"
                    title="Loans"
                    content="500"
                />
            );
            expect(document.querySelector('.user-info-card__icon-wrapper--orange')).toBeInTheDocument();
        });

        it('should apply coral icon variant', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="coral"
                    title="Savings"
                    content="300"
                />
            );
            expect(document.querySelector('.user-info-card__icon-wrapper--coral')).toBeInTheDocument();
        });

        it('should render the icon image', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            // Image has empty alt so use querySelector
            expect(document.querySelector('img')).toBeInTheDocument();
        });

        it('should have proper card structure', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card__header')).toBeInTheDocument();
            expect(document.querySelector('.user-info-card__content')).toBeInTheDocument();
        });

        it('should have label element', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card__label')).toBeInTheDocument();
        });

        it('should have value element', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card__value')).toBeInTheDocument();
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should display empty string for title if empty', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title=""
                    content="2,453"
                />
            );
            expect(document.querySelector('.user-info-card__label')?.textContent).toBe('');
        });

        it('should display empty string for content if empty', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    title="Users"
                    content=""
                />
            );
            expect(document.querySelector('.user-info-card__value')?.textContent).toBe('');
        });
    });

    // =========================================================================
    // USE CASE SCENARIOS
    // =========================================================================
    describe('Use Case Scenarios', () => {
        it('should display Users card correctly', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="pink"
                    title="USERS"
                    content="2,453"
                />
            );
            expect(screen.getByText('USERS')).toBeInTheDocument();
            expect(screen.getByText('2,453')).toBeInTheDocument();
            expect(document.querySelector('.user-info-card__icon-wrapper--pink')).toBeInTheDocument();
        });

        it('should display Active Users card correctly', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="purple"
                    title="ACTIVE USERS"
                    content="2,453"
                />
            );
            expect(screen.getByText('ACTIVE USERS')).toBeInTheDocument();
            expect(document.querySelector('.user-info-card__icon-wrapper--purple')).toBeInTheDocument();
        });

        it('should display Users with Loans card correctly', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="orange"
                    title="USERS WITH LOANS"
                    content="12,453"
                />
            );
            expect(screen.getByText('USERS WITH LOANS')).toBeInTheDocument();
            expect(document.querySelector('.user-info-card__icon-wrapper--orange')).toBeInTheDocument();
        });

        it('should display Users with Savings card correctly', () => {
            render(
                <UserInfoCard
                    icon={mockIcon}
                    iconVariant="coral"
                    title="USERS WITH SAVINGS"
                    content="102,453"
                />
            );
            expect(screen.getByText('USERS WITH SAVINGS')).toBeInTheDocument();
            expect(document.querySelector('.user-info-card__icon-wrapper--coral')).toBeInTheDocument();
        });
    });
});
