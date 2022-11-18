import { IonItemSliding } from "@ionic/angular";

export function isLowResolution() {
  return window.innerWidth < 550;
}

/**
 * Checks if the resolution is higher than 550. If it is, close the sliding item option
 * @param sliding Sliding item to close it
 * @returns True if the resolution is lower than 550px or False if it's higher
 */
export function isLowResolutionSliding(sliding: IonItemSliding) {
  if (sliding && window.innerWidth > 550) {
    sliding.close();
  }
  return window.innerWidth < 550;
}