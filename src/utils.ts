function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    };
    
    // undefined instead of something like 'en-US' to use the user's locale
    return new Date(date).toLocaleDateString(undefined, options);
}

export { formatDate };