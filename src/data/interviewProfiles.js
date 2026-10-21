import { systemDesignProfile } from './profiles/system-design/profile.js'
import { angularDeveloperProfile } from './profiles/angular-developer/profile.js'
import { reactDeveloperProfile } from './profiles/react-developer/profile.js'

// Register profile modules here; shared views only consume this common shape.
export const interviewProfiles = {
    [systemDesignProfile.id]: systemDesignProfile,
    [angularDeveloperProfile.id]: angularDeveloperProfile,
    [reactDeveloperProfile.id]: reactDeveloperProfile,
}

export const defaultProfileId = 'system-design'
