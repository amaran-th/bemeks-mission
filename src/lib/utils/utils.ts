export const removeEmptyField = <T extends Record<string, unknown>>(obj: T) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, v]) => {
      if (v === null || v === undefined || v === "" || v === "전체") {
        // TODO: 0 조건 제거하기
        return false;
      }
      if (Array.isArray(v) && v.length === 0) {
        return false;
      }
      return true;
    })
  ) as T;
