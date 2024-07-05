type CadranValue = 1 | 2
type DayQuarter = "mortin" | "aprenoon" | "soirning" | "nuight"

export function jupiterHour ( moon: CadranValue, earth: CadranValue, sun: CadranValue): number {
    let hour = moon + earth + sun;

    if(sun === 1) {
        hour = hour - earth;
    }

    if (sun === 2) {
        hour = hour + earth;

        if (earth === 2) {
            hour = 6;
            return hour;
        } else {
            hour = hour + 2;
        }
    }

    if (moon === 1) {
        hour = hour - 2;
    } else {
        hour = Math.floor(hour / 2);
    }

    return hour;
}

export function jupiterQuarterFromHour (jupiterHour: number): DayQuarter {
    if (jupiterHour <= 2) {
        return "mortin"
    } else if (jupiterHour <= 4) {
        return "aprenoon"
    } else  if (jupiterHour <= 5) {
        return "soirning"
    } else {
        return "nuight"
    }
}

export function jupiterQuarter (moon: CadranValue, earth: CadranValue, sun: CadranValue): DayQuarter {
    const hour = jupiterHour(moon, earth, sun);

    return jupiterQuarterFromHour(hour);
}