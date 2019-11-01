export const createArreySectionList = (sounds) => {
    let result = [];
    const titles = Object.keys(sounds).map((key) => sounds[key].title);
    const unicTitle = [... new Set(titles)];
    const soundsArrey = Object.values(sounds);
    result = unicTitle.reduce((arr, title) => {
        const obj = { title };
        obj.data = soundsArrey.filter((item) => item.title === title);
        return [...arr, obj]
    }, [])
    return result;
}

export const createArrayFavouriteList = (sounds) => {
    let result = [];
    const unicTitle = ['Favorites'];
    const soundsArrey = Object.values(sounds);
    result = unicTitle.reduce((arr, title) => {
        const obj = { title };
        obj.data = soundsArrey.filter((item) => item.isFavorite);
        return [...arr, obj]
    }, [])
    return result;
}
