{ pkgs }:

pkgs.mkShell {
  packages = [pkgs.nodejs-18_x];
  shellHook = ''
    export PATH="$PATH:node_modules/.bin"
  '';
}

