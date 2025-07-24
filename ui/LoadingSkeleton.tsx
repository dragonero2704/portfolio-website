import Cycle from "./animation/CycleText";


export default function LoadingSkeleton()
{
    return <Cycle interval={100}>
        <p>.  </p>
        <p>.. </p>
        <p>...</p>
    </Cycle>
}