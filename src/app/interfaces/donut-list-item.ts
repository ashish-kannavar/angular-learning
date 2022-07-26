import { DonutResult } from "./donut-api-model";
export interface DonutListItem {
    id:number;
    name: string;
}


export function DonutResultToListItem(result: DonutResult): DonutListItem {
    return { name: result.name, id: result.id };
  }
