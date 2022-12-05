'use strict';

/**
 * Implement calculateMenAverageAge function
 *
 * Function returns average age of men in array. If `century` is specified then
 * function calculates average age only for men who died in this century
 *
 * To calculate century:
 * Divide year of person's death by 100: Math.ceil(person.died / 100)
 *
 * @param {object[]} people
 * @param {number} century - optional
 *
 * @return {number}
 */
function calculateMenAverageAge(people, century) {
  const man = people.filter((person) => (
    century
      ? person.sex === 'm' && Math.ceil(person.died / 100) === century
      : person.sex === 'm'));

  const sum = man.reduce((acc, cur) => acc + (cur.died - cur.born), 0);

  // console.log(man);

  return sum / man.length;
  // write code here
  // learn how to use array methods like .filter .map .some .every .find .reduce
  // avoid using loop and forEach
  // replace `if ()` statement with &&, || or ?:
  // without nesting
}

/**
 * Implement calculateWomenAverageAge function
 *
 * Function returns average age of women in array. If `withChildren` is
 * specified then function calculates average age only for women with children
 *
 * Hint: To check if a woman has children you should find someone who mention
 * her as mother.
 *
 * @param {object[]} people
 * @param {boolean} withChildren - optional
 *
 * @return {number}
 */
function calculateWomenAverageAge(people, withChildren) {
  const women = people.filter(mother => withChildren
    ? mother.sex === 'f' && people.some(child => child.mother === mother.name)
    : mother.sex === 'f');
  const sum = women.reduce((acc, cur) => acc + (cur.died - cur.born), 0);

  return sum / women.length;
}

/**
 * Implement calculateAverageAgeDiff function.
 *
 * The function returns an average age difference between a child and his or her
 * mother in the array. (A mother's age at child birth)
 *
 * If `onlyWithSon` is specified then function calculates age difference only
 * for sons and their mothers.
 *
 * @param {object[]} people
 * @param {boolean} onlyWithSon - optional
 *
 * @return {number}
 */
function calculateAverageAgeDiff(people, onlyWithSon) {
  const children = people.filter(child => onlyWithSon
    ? child.sex === 'm' && people.find(mother => child.mother === mother.name)
    : people.find(mother => child.mother === mother.name));

  const diff = children.map(child => child.born
    - people.find(mother => child.mother === mother.name).born);

  return diff.reduce((acc, cur) => acc + cur, 0) / diff.length;
}

module.exports = {
  calculateMenAverageAge,
  calculateWomenAverageAge,
  calculateAverageAgeDiff,
};
