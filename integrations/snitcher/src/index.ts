import {
    createIntegration,
    FetchPublishScriptEventCallback,
    RuntimeContext,
    RuntimeEnvironment,
} from '@gitbook/runtime';

import script from './script.raw.js';

type SnitcherRuntimeContext = RuntimeContext<
    RuntimeEnvironment<
        {},
        {
            snitcher_id?: string;
        }
    >
>;

export const handleFetchEvent: FetchPublishScriptEventCallback = async (
    event,
    { environment }: SnitcherRuntimeContext
) => {
    const snitcherId = environment.spaceInstallation.configuration.snitcher_id;
    if (!snitcherId) {
        return;
    }

    return new Response(script.replace('<TO_REPLACE>', snitcherId), {
        headers: {
            'Content-Type': 'application/javascript',
            'Cache-Control': 'max-age=604800',
        },
    });
};

export default createIntegration<SnitcherRuntimeContext>({
    fetch_published_script: handleFetchEvent,
});
