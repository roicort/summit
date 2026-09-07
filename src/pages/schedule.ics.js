import ICAL from 'ical.js';
import { getCollection } from 'astro:content';

const timezone = 'America/Mexico_City';

function createLocalTime(date, time) {
	const value = ICAL.Time.fromDateTimeString(`${date.toISOString().slice(0, 10)}T${time}:00`);
	value.zone = ICAL.Timezone.localTimezone;
	return value;
}

export async function GET() {
	const conferences = (await getCollection('conferences'))
		.filter((conference) => conference.id.startsWith('en/'))
		.sort((first, second) => first.data.date.valueOf() - second.data.date.valueOf());

	const calendar = new ICAL.Component(['vcalendar', [], []]);
	calendar.addPropertyWithValue('prodid', '-//Summit 2026//Climate Summit//EN');
	calendar.addPropertyWithValue('version', '2.0');
	calendar.addPropertyWithValue('calscale', 'GREGORIAN');
	calendar.addPropertyWithValue('x-wr-calname', 'Summit 2026');
	calendar.addPropertyWithValue('x-wr-timezone', timezone);

	for (const conference of conferences) {
		const { data } = conference;
		const start = createLocalTime(data.date, data.startsAt);
		const end = data.endsAt ? createLocalTime(data.date, data.endsAt) : start.clone();

		if (!data.endsAt) {
			end.addDuration(ICAL.Duration.fromSeconds(45 * 60));
		}

		const event = new ICAL.Component('vevent');
		event.addPropertyWithValue('uid', `${conference.id}@summit`);
		event.addPropertyWithValue('dtstamp', ICAL.Time.now());
		event.addPropertyWithValue('dtstart', start);
		event.addPropertyWithValue('dtend', end);
		event.addPropertyWithValue('summary', data.title);
		event.addPropertyWithValue('description', data.description);
		event.addPropertyWithValue('location', `${data.room}, Museo Nacional de Antropologia, Mexico City`);

		for (const propertyName of ['dtstart', 'dtend']) {
			event.getFirstProperty(propertyName)?.setParameter('tzid', timezone);
		}

		calendar.addSubcomponent(event);
	}

	return new Response(calendar.toString(), {
		headers: {
			'Content-Type': 'text/calendar; charset=utf-8',
			'Content-Disposition': 'attachment; filename="summit-2026.ics"',
		},
	});
}