interface IMember {
  name: Record<string, string>;
  surname: Record<string, string>;
  position: Record<string, string>;
  picture: string;
  description: Record<string, string>;
  socialMedia: {
    instagram?: string;
    x?: string;
    facebook?: string;
    linkedIn?: string;
  };
}
interface MemberCardProps {
  member: IMember;
  key: number;
}

export type { MemberCardProps, IMember };
