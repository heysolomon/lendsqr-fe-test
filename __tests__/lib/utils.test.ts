import { cn } from '@/lib/utils';

describe('cn (className utility)', () => {
    // =========================================================================
    // POSITIVE SCENARIOS
    // =========================================================================
    describe('Positive Scenarios', () => {
        it('should merge single class string', () => {
            expect(cn('class1')).toBe('class1');
        });

        it('should merge multiple class strings', () => {
            expect(cn('class1', 'class2')).toBe('class1 class2');
        });

        it('should merge class strings with spaces', () => {
            expect(cn('class1 class2', 'class3')).toBe('class1 class2 class3');
        });

        it('should handle object syntax with truthy value', () => {
            expect(cn({ 'active': true })).toBe('active');
        });

        it('should handle object syntax with falsy value', () => {
            expect(cn({ 'active': false })).toBe('');
        });

        it('should handle mixed class types', () => {
            expect(cn('base', { 'active': true, 'disabled': false }, 'extra')).toBe('base active extra');
        });

        it('should handle array of classes', () => {
            expect(cn(['class1', 'class2'])).toBe('class1 class2');
        });

        it('should handle nested arrays', () => {
            expect(cn(['class1', ['class2', 'class3']])).toBe('class1 class2 class3');
        });

        it('should handle BEM-style class names', () => {
            expect(cn('skeleton', 'skeleton--circle', 'skeleton--large')).toBe('skeleton skeleton--circle skeleton--large');
        });

        it('should handle conditional classes common in components', () => {
            const isActive = true;
            const isDisabled = false;
            expect(cn('button', { 'button--active': isActive, 'button--disabled': isDisabled }))
                .toBe('button button--active');
        });
    });

    // =========================================================================
    // NEGATIVE SCENARIOS
    // =========================================================================
    describe('Negative Scenarios', () => {
        it('should handle empty string', () => {
            expect(cn('')).toBe('');
        });

        it('should handle null value', () => {
            expect(cn(null)).toBe('');
        });

        it('should handle undefined value', () => {
            expect(cn(undefined)).toBe('');
        });

        it('should handle false', () => {
            expect(cn(false)).toBe('');
        });

        it('should handle 0', () => {
            expect(cn(0)).toBe('');
        });

        it('should filter out falsy values from mixed input', () => {
            expect(cn('class1', null, undefined, false, 'class2')).toBe('class1 class2');
        });

        it('should handle empty object', () => {
            expect(cn({})).toBe('');
        });

        it('should handle empty array', () => {
            expect(cn([])).toBe('');
        });

        it('should handle all falsy conditions', () => {
            expect(cn({ 'class1': false, 'class2': null, 'class3': undefined })).toBe('');
        });

        it('should not add extra spaces with empty inputs', () => {
            expect(cn('class1', '', 'class2')).toBe('class1 class2');
        });
    });

    // =========================================================================
    // EDGE CASES
    // =========================================================================
    describe('Edge Cases', () => {
        it('should handle no arguments', () => {
            expect(cn()).toBe('');
        });

        it('should handle duplicate class names', () => {
            // clsx does not deduplicate, so this should contain duplicates
            const result = cn('class1', 'class1');
            expect(result).toContain('class1');
        });

        it('should handle class names with special characters', () => {
            expect(cn('class-name', 'class_name', 'class123')).toBe('class-name class_name class123');
        });

        it('should handle very long class names', () => {
            const longClass = 'a'.repeat(100);
            expect(cn(longClass)).toBe(longClass);
        });

        it('should handle many arguments', () => {
            const classes = Array(100).fill('class').map((c, i) => `${c}${i}`);
            const result = cn(...classes);
            expect(result.split(' ').length).toBe(100);
        });
    });
});
