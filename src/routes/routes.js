import Home from '~/pages/Home'
import Lesson from '~/pages/Lesson'
import About from '~/pages/About'
import config from '~/config'

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.lesson, component: Lesson },
    { path: config.routes.about, component: About }
]

export { publicRoutes }