cd ..
mkdir temp
GITHUB_URL=https://oauth:${Nilotica_GH_TOKEN}@github.com/Nilotica/nilotica.github.io.git
git clone ${GITHUB_URL} temp

rm -rf temp/*
mv ./NiloticaDocs/src/.vitepress/dist/* temp

cd ./temp

git config --global init.defaultBranch main
git remote add origin ${GITHUB_URL}
git branch -M main

git config --global user.name "Donny"
git config --global user.email "donnymoving@gmail.com"
git add *
git commit -m "docs: auto update"
git push -f