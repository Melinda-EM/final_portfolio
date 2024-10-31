import WindowsContainer from '../layout/WindowsContainer';

export const Skills = () => {
  return (
        <WindowsContainer id="competences" title="Compétences">
          <section className=" mt-2 mb-6">
              <div className="bg-light-blue border-t-2 border-l-2 border-white border-b-2 border-r-2 p-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                  <div className="bg-light-blue border-t-2 border-l-2 border-white border-b-2 border-r-2 p-2">
                    <div className="bg-purple text-white p-1 mb-2 font-montserrat">
                      <span className="mr-2">💻</span>
                      Langages
                    </div>
                    <ul className="space-y-1 font-consolas">
                      <li className="flex items-center">
                        <span className="mr-2">📄</span>
                        HTML
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎨</span>
                        CSS
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">⚡</span>
                        JavaScript
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🐘</span>
                        PHP
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🐍</span>
                        Python
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💎</span>
                        Ruby
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🐹</span>
                        Golang
                      </li>
                    </ul>
                  </div>

                  <div className="bg-light-blue border-t-2 border-l-2 border-white border-b-2 border-r-2 p-2">
                    <div className="bg-purple text-white p-1 mb-2 font-montserrat">
                      <span className="mr-2">🛠️</span>
                      Frameworks
                    </div>
                    <ul className="space-y-1 font-consolas">
                      <li className="flex items-center">
                        <span className="mr-2">⚛️</span>
                        React
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎵</span>
                        Symfony
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🚂</span>
                        Express.js
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎯</span>
                        Django
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎮</span>
                        Phaser.js
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📦</span>
                        Next.js
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🛤️</span>
                        Ruby on Rails
                      </li>
                    </ul>
                  </div>

                  <div className="bg-light-blue border-t-2 border-l-2 border-white border-b-2 border-r-2 p-2">
                    <div className="bg-purple text-white p-1 mb-2 font-montserrat">
                      <span className="mr-2">🔧</span>
                      Env. Technique
                    </div>
                    <ul className="space-y-1 font-consolas">
                      <li className="flex items-center">
                        <span className="mr-2">🐳</span>
                        Docker
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🐧</span>
                        Linux
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📝</span>
                        VSCode
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🐱</span>
                        GitHub
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎨</span>
                        Figma
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔄</span>
                        Insomnia
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🌐</span>
                        Apache
                      </li>
                    </ul>
                  </div>

                  <div className="bg-light-blue border-t-2 border-l-2 border-white border-b-2 border-r-2 p-2">
                    <div className="bg-purple text-white p-1 mb-2 font-montserrat">
                      <span className="mr-2">🎯</span>
                      Soft-skills
                    </div>
                    <ul className="space-y-1 font-consolas">
                      <li className="flex items-center">
                        <span className="mr-2">👑</span>
                        Leadership
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">📊</span>
                        Organisation
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🤝</span>
                        Travail d&#39;équipe
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎨</span>
                        Créativité
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">💡</span>
                        Initiative
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔄</span>
                        Adaptabilité
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🔍</span>
                        Curiosité
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">🎯</span>
                        Résolution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </section>
        </WindowsContainer>
  );
};