import Channel from '../../../src/behavioral/mediator/Channel';
import Participant from '../../../src/behavioral/mediator/Participant';

test("should create a participant's chat without a channel", function () {
	const participantA = new Participant("A");
	const participantB = new Participant("B");
	const participantC = new Participant("C");
	participantB.receive(participantA, "hello");
	participantC.receive(participantA, "hello");
	expect(participantB.messages[0]).toBe("A: hello");
	expect(participantC.messages[0]).toBe("A: hello");
});

test("should create a participant's chat with a channel", function () {
	const participantA = new Participant("A");
	const participantB = new Participant("B");
	const participantC = new Participant("C");
	const channel = new Channel();
	channel.register(participantA);
	channel.register(participantB);
	channel.register(participantC);
	channel.send(participantA, "hello");
	expect(participantB.messages[0]).toBe("A: hello");
	expect(participantC.messages[0]).toBe("A: hello");
});