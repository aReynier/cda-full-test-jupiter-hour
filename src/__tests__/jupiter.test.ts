import { jupiterHour, jupiterQuarterFromHour, jupiterQuarter } from "../modules/jupiter";
import { expect, describe, it } from "vitest";

// 1,1,1 --> 0 --> mortin
describe("lune = 1 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(1, 1, 1)).toBe(0);
            });
        });
    });
});

// 2,1,1 --> 1 --> mortin
describe("lune = 2 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(2, 1, 1)).toBe(1);
            });
        });
    });
});

// 1,2,1 --> 0
describe("lune = 1 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(1, 2, 1)).toBe(0);
            });
        });
    });
});

// 1,1,2 --> 5
describe("lune = 1 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(1, 1, 2)).toBe(5);
            });
        });
    });
});

// 2,2,1 --> 1
describe("lune = 2 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(2, 2, 1)).toBe(1);
            });
        });
    });
});

// 2,1,2 --> 4
describe("lune = 2 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(2, 1, 2)).toBe(4);
            });
        });
    });
});

// 1,2,2 --> 6
describe("lune = 1 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(1, 2, 2)).toBe(6);
            });
        });
    });
});

// 2,2,2 --> 6
describe("lune = 2 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterHour(2, 2, 2)).toBe(6);
            });
        });
    });
});

// Tests sur les Quarter
describe("jupiter hour <= 2 ", () => {
    it(" doit être égal à ", () => {
        expect(jupiterQuarterFromHour(2)).toBe("mortin");
    });
});

describe("jupiter hour <= 4 ", () => {
    it(" doit être égal à ", () => {
        expect(jupiterQuarterFromHour(4)).toBe("aprenoon");
    });
});

describe("jupiter hour <= 5 ", () => {
    it(" doit être égal à ", () => {
        expect(jupiterQuarterFromHour(5)).toBe("soirning");
    });
});

describe("jupiter hour > 5 ", () => {
    it(" doit être égal à ", () => {
        expect(jupiterQuarterFromHour(6)).toBe("nuight");
    });
});

//test jupiterQuarter
// 1,1,1 --> 0 --> mortin
describe("lune = 1 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(1, 1, 1)).toBe("mortin");
            });
        });
    });
});

// 2,1,1 --> 1 --> mortin
describe("lune = 2 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(2, 1, 1)).toBe("mortin");
            });
        });
    });
});

// 1,2,1 --> 0 --> mortin
describe("lune = 1 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(1, 2, 1)).toBe("mortin");
            });
        });
    });
});

// 1,1,2 --> 5 --> soirning
describe("lune = 1 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(1, 1, 2)).toBe("soirning");
            });
        });
    });
});

// 2,2,1 --> 1 --> mortin
describe("lune = 2 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 1 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(2, 2, 1)).toBe("mortin");
            });
        });
    });
});

// 2,1,2 --> 4 --> aprenoon
describe("lune = 2 ", () => {
    describe("et terre = 1 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(2, 1, 2)).toBe("aprenoon");
            });
        });
    });
});

// 1,2,2 --> 6 --> nuight
describe("lune = 1 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(1, 2, 2)).toBe("nuight");
            });
        });
    });
});

// 2,2,2 --> 6 --> nuight
describe("lune = 2 ", () => {
    describe("et terre = 2 ", () => {
        describe("et soleil = 2 ", () => {
            it(" doit être égal à ", () => {
                expect(jupiterQuarter(2, 2, 2)).toBe("nuight");
            });
        });
    });
});

