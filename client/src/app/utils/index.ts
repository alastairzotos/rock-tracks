export const padNumber = (num: number): string => (
    (num < 10 ? '0' : '') + num
);

export const millisToTime = (millis: number): string => {
    const minutes = Math.floor(millis / 60000);
    const seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return minutes + ':' + padNumber(seconds);
};

export const formatDate = (input: string): string => {
    const date = new Date(input);

    return `${padNumber(date.getDate())}-${padNumber(date.getMonth())}-${date.getFullYear()}`;
};
