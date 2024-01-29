/*
====== Compare Versions (6 kyu) ======
Karan's company makes software that provides different features based on the version of operating system of the user.

For finding which version is more recent, Karan uses the following method:

function compareVersions (version1, version2) {
  return parseFloat(version1) >= parseFloat(version2);
}

While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.

Karan's function fails for the new version:

compareVersions ("10.9", "10.10");       // returns true, while it should return false

Karan now wants to spend some time to write a more robust version comparison function that works for any future version/sub-version updates.

Help Karan write this function. Here are a few sample cases:

compareVersions("11", "10");                    // returns true
compareVersions("11", "11");                    // returns true
compareVersions("10.4.6", "10.4");              // returns true
compareVersions("10.4", "11");                  // returns false
compareVersions("10.4", "10.10");               // returns false
compareVersions("10.4.9", "10.5");              // returns false

It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.

1) Parameters - A string representing the OS version number. Includes numbers separated by decimal points.
2) Return - A boolean true if version1 is a later version, false  otherwise.
3) Examples - See tests
4) Pseudocode - see comments

*/

function compareVersions(version1, version2) {
  // Split each version into component numbers
  let nums1 = version1.split(".");
  let nums2 = version2.split(".");

  // Convert strings to numbers
  nums1 = nums1.map((x) => +x);
  nums2 = nums2.map((y) => +y);

  // Find maximum array length between both arrays
  const max = Math.max(nums1.length, nums2.length);

  // Compare array of numbers to see if version1 is newer
  for (let i = 0; i <= max - 1; i++) {
    // Version 1 is newer
    if (nums1[i] > nums2[i]) return true;
    // Version 1 is older
    if (nums1[i] < nums2[i] || !nums1[i] && nums2[i]) return false;
  }
  // Both versions are the same
  return true;
}

// Tests
console.log(compareVersions("11", "10"), true);
console.log(compareVersions("11", "11"), true);
console.log(compareVersions("10.4.6", "10.4"), true);
console.log(compareVersions("10.4", "11"), false);
console.log(compareVersions("10.4", "10.10"), false);
console.log(compareVersions("10.4.9", "10.5"), false);
