let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles.splice(1, 1, 'Классика');
let deletedElement = styles.splice(0,1);
styles.unshift("Рэп", "Рэгги");

console.log(deletedElement);
console.log(styles);