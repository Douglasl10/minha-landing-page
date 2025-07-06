"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Code, Smartphone, Zap, CheckCircle, Star, Server, Badge, ShieldCheck, MessageCircle, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const [isMenuOpenn, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Olá, gostaria de solicitar um orçamento para o seguinte serviço: ${formData.service}. Meu nome é ${formData.name}, meu telefone é ${formData.phone} e meu e-mail é ${formData.email}. Aqui está minha mensagem: ${formData.message}`;

    const whatsappUrl = `https://wa.me/5519989830244?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 bg-black/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-sky-300">CouDev</div>

            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover: text-sky-300 transition-colors">Home</a>
              <a href="#services" className="hover: text-sky-300 transition-colors">Serviços</a>
              <a href="#templates" className="hover: text-sky-300 transition-colors">Templates</a>
              <a href="#about" className="hover: text-sky-300 transition-colors">Sobre</a>
              <a href="#contact" className="hover: text-sky-300 transition-colors">Contato</a>
            </nav>
            <button className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpenn)}>
              {isMenuOpenn ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpenn && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover: text-sky-300 transition-colors">Home</a>
                <a href="#about" className="hover: text-sky-300 transition-colors">Sobre</a>
                <a href="#services" className="hover: text-sky-300 transition-colors">Serviços</a>
                <a href="#templates" className="hover: text-sky-300 transition-colors">Templates</a>
                <a href="#contact" className="hover: text-sky-300 transition-colors">Contato</a>
              </div>
            </nav>
          )}
        </div>
      </header>
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-black via-gray-900 to-sky-900">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6x1 font-bold leading-tight">Transforme sua
                  <span className="text-sky-300"> ideia </span>
                  em realidade com a <span className="text-sky-300">CouDev</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Criamos websites e sistemas web modernos, responsivos e otimizados
                  para impulsionar seu negócio, atraindo mais clientes e aumentando sua visibilidade online.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-sky-300 hover:bg-sky-400 text-black font-semibold"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="border-sky-300 text-sky-300 hover:bg-sky-300 hover:text-black bg-transparent border"
                  onClick={() => document.getElementById("templates")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Templates
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-300">+50</div>
                  <div className="text-sm text-gray-400 uppercase">Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-300">100%</div>
                  <div className="text-sm text-gray-400 uppercase">Satisfação do Cliente</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-shadow-sky-300">24h</div>
                  <div className="text-sm text-gray-400 uppercase">Suporte</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="https://bing.com/th/id/BCO.b1885158-3af3-410e-ba86-53c6ee4e6f8e.png"
                alt="Desenvolvimento Web"
                className="rounded-4xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300/10 to-transparent rounded-lg blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos
              <span className="text-sky-300"> Serviços</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Oferecemos soluções completas para sua presença digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 l:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:border-sky-300/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-300/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-sky-300" />
                </div>
                <CardTitle className="text-white">Websites Personalizados</CardTitle>
                <CardDescription className="text-gray-400">
                  Desenvolvemos websites personalizados para atender às suas necessidades específicas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Desing Responsivo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    SEO Otimizado
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Alta Performance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-sky-300/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-300/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-sky-300" />
                </div>
                <CardTitle className="text-white">Sistema Web</CardTitle>
                <CardDescription className="text-gray-400">
                  Plataformas robustas e escaláveis para atender às suas necessidades de negócios.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Dashboard Administrativo
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Integrações com APIs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Banco de Dados Seguro
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-sky-300/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-300/20 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-sky-300" />
                </div>
                <CardTitle className="text-white">E-commerce</CardTitle>
                <CardDescription className="text-gray-400">
                  Lojas virtuais modernas e seguras para impulsionar suas vendas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Pagamentos integrados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Gestão de produtos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Relatórios de vendas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-sky-300/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-300/20 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-sky-300" />
                </div>
                <CardTitle className="text-white">Websites Responsivos</CardTitle>
                <CardDescription className="text-gray-400">
                  Criamos sites responsivos que se adaptam a qualquer dispositivo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Design moderno
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Adaptado e Programado para dispositivos móveis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-sky-300 mr-2" />
                    Melhor experiência do usuário
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="templates" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Templates <span className="text-sky-300">Premiun</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nossos templates são projetados para atender a uma ampla variedade de necessidades de negócios.
              Escolha entre nossos templates profissionais e tenha seu site no ar rapidamente
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "E-commerce Moderno", category: "Loja Virtual", price: "R$ 1.299", image: "https://bing.com/th/id/BCO.ecede630-3ffb-4ad2-8053-443acb07e7a2.png" },
              { name: "Landing Page Corporativa", category: "Institucional", price: "R$ 799", image: "https://bing.com/th/id/BCO.531e0820-9f26-4956-9470-c16577d00e3b.png" },
              { name: "Portfolio Criativo", category: "Portfolio", price: "R$ 599", image: "https://bing.com/th/id/BCO.253e7160-7cd0-4425-bb7b-5465ce3849dd.png" },
              { name: "Blog Profissional", category: "Blog", price: "R$ 699", image: "https://bing.com/th/id/BCO.ba3270e4-c650-4c3e-b9e6-4434208dabd3.png" },
              { name: "Dashboard Admin", category: "Sistema", price: "R$ 1.599", image: "https://bing.com/th/id/BCO.0137dd2b-0b8c-4f1f-99b6-0a3036652489.png" },
              { name: "Site Restaurante", category: "Alimentação", price: "R$ 899", image: "https://bing.com/th/id/BCO.04f05714-d19f-47cf-98d5-ec89fa58dc18.png" },
            ].map((template, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:boder-skky-300/50 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img src={template.image}
                    alt={template.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-sky-300 text-black rounded-2xl">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{template.name}</CardTitle>
                  <div className="flex items-center space-x-4 gap-1">
                    <span className="text-gray-300">{template.price}</span>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current mx-0" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-sky-300 hover:bg-sky-400 text-black"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Solicitar Template
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative">
              <img src="https://bing.com/th/id/BCO.bc5ad014-918f-445e-9015-b91c44034c8d.png"
                alt="sobre nos"
                className="rouded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300/10 to-transparent rouded-lg"></div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Por que escolher a <span className="text-sky-300">CouDev?</span>
                </h2>
                <p className="text-gray-300 mb-6 text-xl">
                  Somos especialistas em criar soluções digitais que realmente funcionam para o seu negócio.
                  Com anos de experiência no mercado, transformamos ideias em realidade digital.
                  dos em resolução de problemas, estamos comprometidos em entregar resultados excepcionais.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sky-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-sky-300" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Experncia em Desenvolvimento Web
                  </h3>
                  <p className="text-gray-300">
                    Mais de 2 anos de experiência em desenvolvimento web, sempre atualizados com as
                    últimas tecnologias do mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    Entrega rápida e eficiente.
                  </h3>
                  <p className="text-gray-300">
                    Projetos entregues no prazo acordado, com qualidade garantida e suporte
                    completo durante todo o processo.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Tecnologia Moderna</h3>
                  <p className="text-gray-300">Utilizamos as tecnologias mais modernas e seguras do mercado, garantindo
                    performance e escalabilidade.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-sky-300/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2 text-lg">Suporte e Manutenção</h3>
                  <p className="text-gray-300">
                    Acompanhamento e suporte técnico pós-entrega, garantindo que seu projeto
                    continue funcionando perfeitamente.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-300 mb-2 mt-2">50+</div>
                <div className="text-gray-400 text-sm">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-300 mb-2 mt-2">100%</div>
                <div className="text-gray-400 text-sm">Satisfação dos Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-300 mb-2 mt-2">+2</div>
                <div className="text-gray-400 text-sm">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="textt-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicite seu
                <span className="text-sky-300"> Orçamento</span></h2>
              <p className="text-xl text-gray-300">
                Preencha o formulário e receba uma proposta via WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input name="name" value={formData.name} onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rouded-md px-3 py-2"
                    placeholder="Digite seu nome completo" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rouded-md px-3 py-2"
                    placeholder="Digite seu email" />
                </div>
              </div>

              <div className="grid md:grid-col-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp *
                  </label>
                  <input name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rouded-md px-3 py-2"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tipo de Serviço *
                  </label>
                  <select name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-600 text-white rouded-md px-3 py-2">
                    <option value="">Selecione um serviço</option>
                    <option value="Website Personalizado">Website Personalizado</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Sistemas Web">Sistemas Web</option>
                    <option value="Templates">Templates</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Descreva seu projeto:
                </label>
                <textarea name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-600 text-white rouded-md px-3 py-2"
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto e o que você precisa."
                />
              </div>

              <Button type="submit"
                size="lg"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md">
                Enviar Formulario
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md-grid-cols-4 gap-8">

            <div className="spaace-y-4">
              <div className="text-2xl font-bold text-sky-300">CouDev</div>
              <p className="text-gray-400 leading-relaxed">Transformando ideias em soluções digitais de alta qualidade.</p>

              <div className="flex space-x-4 pt-4">
                <a href="https://www.instagram.com/douglas.devcod/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  title="Instagram">
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://wa.me/55119989830244"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-green-500 transition-all duration-300"
                  title="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
                    <path fill-rule="evenodd" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Serviços</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#services" className="hover:text-sky-300 transition-colors">
                    Websites Personalizados
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-300 transition-colors">
                    Sistemas Web
                  </a>
                </li>
                <li>
                  <a href="#templates" className="hover:text-sky-300 transition-colors">
                    Templates Premium
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-sky-300 transition-colors">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-sky-300 transition-colors">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#templates" className="hover:text-sky-300 transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-sky-300 transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-300 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-sky-300 flex-shrink-0" />
                  <a href="mailto:contato@coudev.com.br" className="hover:text-sky-300 transition-colors">
                    contato@coudev.com.br
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-sky-300 flex-shrink-0" />
                  <a href="https://wa.me/5519989830244" className="hover:text-sky-300 transition-colors">
                    (19) 98983-0244
                  </a>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-4 w-4 text-sky-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 CouDev. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer >
    </div >
  )
}

