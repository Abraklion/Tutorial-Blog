/* ========================================= *
*       ===  ТРАНСФОРМИРУЕТ ДАННЫЕ  ===      *
* ========================================= */

// [С]-> Статический метод
// [Ч]-> Частный метод
// [П]-> Публичный метод
// [ПH]-> Публичный-наследуемый метод
// (Э)-> Экземпляр класса
// {P}-> Вызываем конструктор, свойство или метод родительского класса

export class TransformService {

  /* ===========================
   *    Статические методы     *
   =========================== */

  // > Трансформирует данные из Обьекта в Массив <
  static fbObjectToArray(fbData) {

    // fbData Обьект типа { a:{a:1,b:2,c:2}, b:{a:1,b:2,c:2}, c:{a:1,b:2,c:2} }

    return Object.keys(fbData).map(key => {

      const item = fbData[key]

      item.id = key

      return item

    })

  }

}