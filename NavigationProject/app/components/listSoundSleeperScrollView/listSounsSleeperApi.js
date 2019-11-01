export const compareCardItem = (a, b) => {
    let result = 0;
    if (a.props.title < b.props.title) {
        result = -1;
    } else if (a.props.title > b.props.title) {
        result = 1;
    }
    return result;
}