import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="BarChart3" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ИнфоГрафикПро</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#catalog" className="text-gray-600 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#tools" className="text-gray-600 hover:text-blue-600 transition-colors">Инструменты</a>
              <a href="#blog" className="text-gray-600 hover:text-blue-600 transition-colors">Блог</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">Начать создавать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Создавайте яркие инфографики за минуты
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ваш надежный источник для создания информативных инфографик. Визуализируйте данные 
              и донесите информацию до аудитории в увлекательной форме.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Play" size={20} className="mr-2" />
                Начать создавать
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть примеры
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Что мы предлагаем</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Полный набор инструментов для создания профессиональных инфографик
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Icon name="Layout" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl">Шаблоны инфографик</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Широкий выбор готовых шаблонов, которые можно легко настроить под ваши нужды
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Icon name="Edit" size={24} className="text-green-600" />
                </div>
                <CardTitle className="text-xl">Инструменты редактирования</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Интуитивно понятный редактор для добавления текста, изображений и диаграмм
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Icon name="BookOpen" size={24} className="text-purple-600" />
                </div>
                <CardTitle className="text-xl">Образовательные ресурсы</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Полезные статьи и видеоуроки для создания эффективных инфографик
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <Icon name="Headphones" size={24} className="text-orange-600" />
                </div>
                <CardTitle className="text-xl">Поддержка пользователей</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Наша команда готова помочь с любыми вопросами и предложениями
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section id="tools" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Мощные инструменты для творчества
              </h3>
              <p className="text-gray-600 mb-8">
                Создавайте профессиональные инфографики с помощью нашего 
                интуитивного редактора и богатой библиотеки элементов.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Drag & Drop редактор</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Библиотека иконок и изображений</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Интеграция с соцсетями</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={20} className="text-green-600" />
                  <span className="text-gray-700">Экспорт в высоком качестве</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/bb74a8d0-9cef-4a12-8af4-014aa10e235e.jpg" 
                alt="Интерфейс редактора инфографики" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Templates Gallery */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Каталог шаблонов</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Выберите из сотен профессиональных шаблонов для любых задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 relative">
                <img 
                  src="/img/1bc5ef67-08ee-4758-b86a-8f3eb6c470f9.jpg" 
                  alt="Шаблоны инфографики" 
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600">Популярное</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Бизнес-аналитика</CardTitle>
                <CardDescription>
                  Шаблоны для представления финансовых данных и бизнес-метрик
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={48} className="text-green-600" />
                </div>
                <Badge className="absolute top-2 left-2 bg-green-600">Новое</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Маркетинг</CardTitle>
                <CardDescription>
                  Инфографики для социальных сетей и маркетинговых кампаний
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-200 relative">
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="GraduationCap" size={48} className="text-purple-600" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Образование</CardTitle>
                <CardDescription>
                  Образовательные инфографики и учебные материалы
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/img/ac5e60b5-e1f2-4d5a-8a0a-721e7795dce3.jpg" 
                alt="Интеграция с соцсетями" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Публикуйте в соцсетях одним кликом
              </h3>
              <p className="text-gray-600 mb-8">
                Интегрируйте ваши инфографики с популярными социальными сетями 
                и делитесь результатами мгновенно.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Icon name="Facebook" size={24} className="text-blue-600" />
                  <span className="font-medium">Facebook</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Icon name="Twitter" size={24} className="text-blue-400" />
                  <span className="font-medium">Twitter</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Icon name="Instagram" size={24} className="text-pink-600" />
                  <span className="font-medium">Instagram</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <Icon name="Linkedin" size={24} className="text-blue-700" />
                  <span className="font-medium">LinkedIn</span>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Share" size={20} className="mr-2" />
                Попробовать интеграцию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Три главных преимущества работы с ИнфоГрафикПро
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-6 p-4 bg-blue-100 rounded-full w-fit">
                <Icon name="Award" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Качество</h4>
              <p className="text-gray-600">
                Мы гарантируем высокое качество всех наших шаблонов и инструментов
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 p-4 bg-green-100 rounded-full w-fit">
                <Icon name="Users" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Доступность</h4>
              <p className="text-gray-600">
                Наши услуги доступны для пользователей любого уровня — от новичков до профессионалов
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 p-4 bg-purple-100 rounded-full w-fit">
                <Icon name="Clock" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Экономия времени</h4>
              <p className="text-gray-600">
                Создавайте инфографику быстро и легко, не тратя часы на сложные программы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Присоединяйтесь к ИнфоГрафикПро
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Начните создавать впечатляющие инфографики, которые помогут вам 
            выделиться на фоне конкурентов и привлечь внимание аудитории
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Icon name="Rocket" size={20} className="mr-2" />
            Начать бесплатно
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="BarChart3" size={24} className="text-blue-600" />
                <span className="text-xl font-bold text-gray-900">ИнфоГрафикПро</span>
              </div>
              <p className="text-gray-600">
                Создавайте профессиональные инфографики быстро и легко
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Продукт</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Шаблоны</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Редактор</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Примеры</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Поддержка</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Справка</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Уроки</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-600">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-gray-900 mb-4">Соцсети</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-600">
              © 2024 ИнфоГрафикПро. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}