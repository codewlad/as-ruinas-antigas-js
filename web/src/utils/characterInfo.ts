type MovementInformationProps = {
    char: HTMLDivElement | null;
    halfStageWidth: number;
    halfStageHeight: number;
	stageContent: HTMLDivElement | null;
}

export let MovementInformation: MovementInformationProps = {
    char: null,
    halfStageWidth: 0,
    halfStageHeight: 0,
    stageContent: null,
}