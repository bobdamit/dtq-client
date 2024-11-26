

export interface Trumplet {
	tags? : string[];
	quote?: string;
	description? : string;
	fullTranscription? :string;
	thumbImageUrl?: string;
	fullImageUrl? : string;
	citation? : Citation;
	review? : Review;
}


export interface Citation {
	dateSpoken? : Date;
	placeSpoken? : string;
	source? : string;
	lastKnownUrl? : string;
}

export interface Review {
	submittedUTC? : Date;
	status? : ReviewStatus;
	reviewNote? : string;
	reviewedUTC? : Date;
}

enum ReviewStatus {
	Pending="Pending",
	RejectedBS="RejectedBS",
	RejectedDupe="RejectedDupe",
	Approved="Approved"
}