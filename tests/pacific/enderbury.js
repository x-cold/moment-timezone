var moment = require("../../moment-timezone");

exports.rules = {
	"Pacific/Enderbury 2013 offset" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Enderbury").zone(), -780, "2013-01-01T00:00:00+00:00 should be -780 minutes offset");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Enderbury").zone(), -780, "2013-12-31T23:59:59+00:00 should be -780 minutes offset");

		test.done();
	},

	"Pacific/Enderbury 2013 format" : function (test) {
		test.expect(2);

		test.equal(moment("2013-01-01T00:00:00+00:00").tz("Pacific/Enderbury").format("HH:mm"), "13:00", "2013-01-01T00:00:00+00:00 should be 13:00 in Pacific/Enderbury");
		test.equal(moment("2013-12-31T23:59:59+00:00").tz("Pacific/Enderbury").format("HH:mm"), "12:59", "2013-12-31T23:59:59+00:00 should be 12:59 in Pacific/Enderbury");

		test.done();
	}
};