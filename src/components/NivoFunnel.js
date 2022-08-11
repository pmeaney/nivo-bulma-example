// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/funnel
import { ResponsiveFunnel } from '@nivo/funnel'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const NivoFunnel = ({ data /* see data tab */ }) => (
    <ResponsiveFunnel
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        // margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        valueFormat=">-.4s"
        colors={{ scheme: 'spectral' }}
        // borderWidth={20}
        borderWidth={0}

        // added this, from docs
        animate={false}

        labelColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        beforeSeparatorLength={100}
        beforeSeparatorOffset={20}
        afterSeparatorLength={100}
        afterSeparatorOffset={20}
        currentPartSizeExtension={10}
        currentBorderWidth={40}
        motionConfig="wobbly"
    />
)

export default NivoFunnel;