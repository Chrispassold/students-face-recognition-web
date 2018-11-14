import {DropzoneComponent} from 'react-dropzone-component';
import React from "react";

import '~root/node_modules/react-dropzone-component/styles/filepicker.css'
import '~root/node_modules/dropzone/dist/min/dropzone.min.css'

const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: 'no-url'
}

const djsConfig = { autoProcessQueue: false, addRemoveLinks: true }
const eventHandlers = { addedfile: (file) => console.log(file) }

const Dropzone = () => (
    <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
)

export default Dropzone