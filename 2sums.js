const twoSum = function(nums, target) {
  const numObj = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (numObj[target - nums[i]] !== undefined) {
      return [numObj[target - nums[i]], i];
    } else {
      numObj[nums[i]] = i;
    }
  }
  return undefined;
};
