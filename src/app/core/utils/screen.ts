import { IonItemSliding } from "@ionic/angular";

export function isLowResolution() {
    return window.innerWidth < 550;
}

export function isLowResolutionSliding(sliding: IonItemSliding) {
    if(sliding && window.innerWidth > 550) {
        sliding.close();
    }
    return window.innerWidth < 550;
}