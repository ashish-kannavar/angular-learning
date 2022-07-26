export interface DonutResults {
    count: number;
    results: DonutResult[];
  }

export interface DonutResult {
    id: number;
    ref: string;
    name: string;
}

export interface DonutDetails {
    "id": number;
    "ref": string;
    "name": string;
    "calories": number,
    "extras": string[];
    "photo": string;
    "photo_attribution": string;
}