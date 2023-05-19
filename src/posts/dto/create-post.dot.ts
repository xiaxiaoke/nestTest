export class CreatePostDto {
  readonly govDeptId: string;
  readonly questionType: number;
  readonly questionStatus: number;
  readonly questionTitle: string;
  readonly questionOption: string;
  readonly questionAnswer: string;
  readonly creator: string;
  readonly createDate: string;
  readonly updater: string;
  readonly updateDate: string;
}
