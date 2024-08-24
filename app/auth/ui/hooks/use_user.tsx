import usePageProps from '#common/ui/hooks/use_page_props'
import User from '#auth/database/models/user'

export default function useUser() {
  const { user } = usePageProps<{ user: User }>()
  return user
}
