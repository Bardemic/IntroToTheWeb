export default function sortObject(obj: any): any {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      return obj.map(sortObject);
    }
  
    const sortedKeys = Object.keys(obj).sort();
    const result: any = {};
  
    for (const key of sortedKeys) {
      result[key] = sortObject(obj[key]);
    }
  
    return JSON.stringify(result);
  }