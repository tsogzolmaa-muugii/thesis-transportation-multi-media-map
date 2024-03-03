export function convertForSlider(min_hour, max_hour, slider_value) {
    const converted = convert(0, min_hour, 100, max_hour, slider_value)
    return Math.floor(converted)
}

function convert(x1, y1, x2, y2, x) {
    const m = (y2 - y1) / (x2 - x1)
    const y = m * (x - x1) + y1
    return y
}
