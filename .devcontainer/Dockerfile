# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=16-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
ARG EXTRA_NODE_VERSION=15
RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN su node -c "npm install -g <your-package-list -here>"

ENV VNC_RESOLUTION="1920x1200x16"

# Install pnpM
// RUN su node -c "curl -fsSL https://get.pnpm.io/install.sh | sh -"

# Install flyctl
RUN su node -c "curl -fsSL https://fly.io/install.sh | sh -"

# Aliases for utilities
RUN echo '# project utilities' >> /etc/bash.bashrc \
    && echo 'export FLYCTL_INSTALL="/home/node/.fly"' >> /etc/bash.bashrc \
    && echo 'export PATH="$FLYCTL_INSTALL/bin:$PATH"' >> /etc/bash.bashrc \
    && echo '# project utilities end' >> /etc/bash.bashrc

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && apt-get install -y firefox-esr