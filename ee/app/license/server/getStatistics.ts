import { getModules, getTags } from './license';
import LivechatPriority from '../../models/server/raw/LivechatPriority';
import LivechatUnitMonitors from '../../models/server/raw/LivechatUnitMonitors';


type ENTERPRISE_STATISTICS = {
	modules: string[];
	tags: string[];
	priorities: string[];
	unitsMonitors: string[];
}

export async function getStatistics(): Promise<ENTERPRISE_STATISTICS> {
	const modules = getModules();
	const tags = getTags().map(({ name }) => name);
	const priorities = await (await LivechatPriority.find().toArray()).map(({ name }) => name);
	const unitsMonitors = await (await LivechatUnitMonitors.find().toArray()).map(({ username }) => username);

	return {
		modules,
		tags,
		priorities,
		unitsMonitors,
	};
}
