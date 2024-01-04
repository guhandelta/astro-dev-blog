function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    
    // undefined instead of something like 'en-US' to use the user's locale
    return new Date(date).toLocaleDateString(undefined, options);
}

// Capitalize the first letter
function capitalize(str: string): string {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export { formatDate, capitalize };
