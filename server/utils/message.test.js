const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it("Should generate correct message object", () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe("generateLocationMessage", () => {
    it("Should generate correct location object", () => {
        var from = 'Deb';
        var latitude = '15';
        var longitude = '20';
        var url = 'https://www.google.com/maps?q=15,20';
        var message = generateLocationMessage(from, latitude, longitude);


        expect(message.createAt).toBeA('number');
        expect(message).toInclude({from, url});

        


    });
});