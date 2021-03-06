// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by lodash.js.
import { name as packageName } from "meteor/wanglian:lodash";

// Write your tests here!
// Here is an example.
Tinytest.add('lodash - example', function (test) {
  test.equal(packageName, "lodash");
});
