import { icons } from '@/common/constant';

export const getIcon = (iconName: string, iconSize?: string) => {
  const Icon = icons[iconName as keyof typeof icons];
  return iconSize ? <Icon style={{ fontSize: iconSize }} /> : <Icon size='small' />
}