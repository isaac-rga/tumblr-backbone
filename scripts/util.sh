#!/bin/bash

# dependencies : github-markdown-preview

tmux_session="tumblr-backbone"

activate(){
    create_tmux_session_if_not_exists $tmux_session
    tmux send-keys -t $tumx_session:0 '. scripts/util.sh && start_server' Enter
}

start_server(){
    (cd build/src
    python -m SimpleHTTPServer)
}

preview_readme(){
    github-markdown-preview readme.md
}
