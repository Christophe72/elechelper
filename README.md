# ⚡ ElecHelper - Assistant Électricien

[![Next.js](https://img.shields.io/badge/Next.js-15.4.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Repository](https://img.shields.io/badge/Repository-GitHub-green)](https://github.com/Christophe72/elechelper)

ElecHelper est une application web moderne conçue pour aider les électriciens dans leur travail quotidien. Elle fournit des protocoles de dépannage interactifs avec schémas visuels, des fiches techniques et des guides de remise en service sécurisée.

## 🆕 Dernières mises à jour

### Version 1.1 - Corrections et améliorations

- ✅ **Correction des schémas manquants** : Ajout des protocoles "circuit-surcharge" et "court-circuit"
- ✅ **Correction HTML** : Résolution du problème `<p>` contenant des éléments `<div>`
- ✅ **Gestionnaire Git** : Script batch pour faciliter les commits et pushs
- ✅ **Documentation complète** : README enrichi avec toutes les fonctionnalités
- ✅ **Structure améliorée** : Organisation optimisée des composants

## 🚀 Fonctionnalités

### 🎨 **Schémas visuels interactifs**

- **Visualisation en temps réel** des circuits électriques
- **Animations synchronisées** avec les étapes de dépannage
- **Composants électriques** représentés avec des icônes SVG
- **Connexions colorées** (phase, neutre, terre, commande)
- **Annotations contextuelles** qui s'affichent au bon moment

### 🔍 **Recherche de panne**

- Diagnostic rapide par symptômes
- Protocoles de dépannage détaillés
- Étapes de remise en service sécurisée
- Navigation interactive étape par étape

### ✅ **Protocoles disponibles**

#### **Circuits de base**

- **Prise ne fonctionne pas** - Diagnostic et réparation avec schéma
- **Interrupteur défaillant** - Test et remplacement visualisé
- **Disjoncteur qui saute** - Analyse et correction du circuit
- **Différentiel qui saute** - Procédure de détection de fuite

#### **Circuits spécialisés**

- **Télérupteur défaillant** - Diagnostic complet avec boutons poussoirs
- **Contacteur défaillant** - Test bobine et contacts de puissance
- **Circuit surchargé** - Identification et répartition des charges
- **Court-circuit** - Procédure d'urgence et réparation sécurisée

#### **Réseaux**

- **Connexion RJ45 Ethernet** - Diagnostic réseau et connectivité

### 📋 **Fiches pratiques**

- **Couleurs des fils** - Code couleur normalisé
- **Tensions usuelles** - Valeurs standard (230V, 400V, TBT)

### 🔐 **Sécurité intégrée**

- Vérification de l'absence de charge avant réenclenchement
- Contrôles d'isolement obligatoires
- Procédures de remise en service progressive
- Surveillance post-intervention

## 🛠️ Technologies

- **Framework**: Next.js 15.4.1
- **Language**: TypeScript
- **Styling**: CSS pur (sans framework)
- **Runtime**: React 19.1.0
- **Build**: Turbopack (développement)

## 📦 Installation

### Prérequis

- Node.js 18.0 ou plus récent
- npm, yarn, pnpm ou bun

### Étapes d'installation

1. **Cloner le projet**

```bash
git clone <url-du-repo>
cd elec-helper
```

2. **Installer les dépendances**

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Lancer le serveur de développement**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. **Ouvrir l'application**

Rendez-vous sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Structure du projet

```text
elec-helper/
├── app/                    # Pages et composants Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── layout.tsx         # Layout principal
│   ├── globals.css        # Styles globaux
│   ├── fiches/            # Fiches techniques
│   │   └── [id]/
│   │       └── page.tsx
│   └── protocole/         # Protocoles de dépannage
│       └── [id]/
│           └── page.tsx
├── components/            # Composants réutilisables
│   └── schemas/          # Système de schémas visuels
│       ├── SchemaEtapes.tsx      # Composant principal des schémas
│       └── IconesTechniques.tsx  # Bibliothèque d'icônes SVG
├── data/                  # Données JSON
│   ├── protocoles.json    # Protocoles de dépannage
│   └── pannes.json        # Symptômes et diagnostics
├── public/                # Assets statiques
└── README.md             # Documentation
```

## 🎨 Système de schémas visuels

### Composants électriques disponibles

- **Prise électrique** - Avec indicateur de tension
- **Disjoncteur** - États ON/OFF visualisés
- **Différentiel** - Avec test de fuite
- **Interrupteur** - Positions ouvert/fermé
- **Télérupteur** - Avec bobinage et contacts
- **Contacteur** - Bobine et contacts de puissance
- **Moteur triphasé** - Avec bornes U, V, W
- **Bouton poussoir** - États actif/inactif
- **Ampoule** - Avec rayonnement lumineux
- **Multimètre** - Affichage de mesures
- **Connecteur RJ45** - Avec câblage réseau
- **Routeur/Switch** - Avec ports actifs
- **Ordinateur** - Terminal de test

### Fonctionnalités visuelles

- **Animations synchronisées** avec les étapes de dépannage
- **Codage couleur** des connexions (phase rouge, neutre bleu, terre vert)
- **Labels dynamiques** sur les connexions actives
- **Annotations contextuelles** qui apparaissent selon l'étape
- **États visuels** des composants (actif/inactif)
- **Lignes pointillées** pour les connexions inactives

## 🎨 Styles et Design

L'application utilise **CSS pur** avec :

- **Design responsive** pour mobile et desktop
- **Palette de couleurs** professionnelle
- **Animations fluides** et effets hover
- **Typographie** moderne (Segoe UI)
- **Cards et ombres** pour la hiérarchie visuelle

## 📚 Utilisation

### Navigation

- **Page d'accueil** : Vue d'ensemble avec sections organisées
- **Recherche de panne** : Accès direct par symptôme
- **Protocoles interactifs** : Procédures avec schémas visuels
- **Fiches pratiques** : Références rapides

### Schémas interactifs

- **Clic sur les étapes** : Les schémas s'animent selon l'étape sélectionnée
- **Composants actifs** : Changent de couleur selon leur état
- **Connexions dynamiques** : Se colorent selon le type de signal
- **Annotations contextuelles** : Informations qui apparaissent au bon moment

### Ajout de contenu

1. **Nouveaux protocoles** : Modifier `data/protocoles.json`
2. **Nouveaux schémas** : Ajouter des cas dans `components/schemas/SchemaEtapes.tsx`
3. **Nouvelles icônes** : Créer des composants SVG dans `components/schemas/IconesTechniques.tsx`
4. **Nouveaux symptômes** : Modifier `data/pannes.json`
5. **Nouvelles fiches** : Ajouter dans `app/fiches/[id]/page.tsx`

### Développement des schémas

Pour ajouter un nouveau schéma :

```typescript
// Dans SchemaEtapes.tsx
case "nouveau-protocole":
  return {
    width: 500,
    height: 300,
    elements: [
      { type: "prise", x: 80, y: 120, etapesActives: [0, 2], size: 60 }
    ],
    connexions: [
      {
        from: { x: 140, y: 150 },
        to: { x: 320, y: 150 },
        etapesActives: [1],
        color: "#ff6b6b",
        label: "Phase"
      }
    ],
    annotations: [
      { x: 80, y: 100, text: "1. Étape initiale", etapeActive: 0 }
    ]
  };
```

## 🔧 Scripts disponibles

```bash
# Développement avec Turbopack
npm run dev

# Build de production
npm run build

# Démarrage en production
npm run start

# Linting du code
npm run lint
```

## �️ Gestionnaire Git

Un script batch `git-manager.bat` est fourni pour simplifier la gestion Git :

### Fonctionnalités du gestionnaire

1. **📤 Push rapide** : add + commit + push automatique
2. **📊 Statut Git** : Voir les modifications en cours
3. **📋 Historique** : Consulter les derniers commits
4. **🔄 Pull GitHub** : Synchroniser depuis le repository distant
5. **🌿 Changement de branche** : Navigation entre les branches

### Utilisation

```bash
# Double-cliquer sur le fichier ou exécuter en ligne de commande
git-manager.bat
```

Le gestionnaire vous guide à travers un menu interactif pour toutes les opérations Git courantes.

## �🚀 Déploiement

### Vercel (recommandé)

1. Connecter le repo GitHub à Vercel
2. Déploiement automatique à chaque push

### Autres plateformes

```bash
# Build de production
npm run build

# Le dossier .next/ contient les fichiers à déployer
```

## 🔐 Sécurité électrique

Cette application respecte les **normes de sécurité** électriques :

- ⚠️ **Coupure systématique** avant intervention
- 🔍 **Vérification d'absence de charge** avant réenclenchement
- 📋 **Contrôles d'isolement** obligatoires
- ⏱️ **Surveillance post-intervention** recommandée

## 💡 Bonnes pratiques

### Développement de schémas

- **Positions cohérentes** : Utilisez un système de grille pour l'alignement
- **Couleurs standardisées** : Respectez les codes couleur électriques
- **Animations subtiles** : Évitez les effets trop marqués
- **Annotations claires** : Texte lisible et bien positionné

### Ajout de protocoles

- **Étapes logiques** : Ordre chronologique des interventions
- **Sécurité prioritaire** : Toujours commencer par les vérifications
- **Descriptions détaillées** : Chaque étape doit être compréhensible
- **Conseils pratiques** : Ajoutez des astuces d'expérience

### Performance

- **SVG optimisés** : Utilisez des formes simples
- **Lazy loading** : Chargement différé des composants lourds
- **Mise en cache** : Stockage local des données fréquentes
- **Compression** : Images et assets optimisés

## 📚 Ressources et références

### Normes électriques

- **NFC 15-100** : Installation électrique basse tension
- **NFC 18-510** : Habilitation électrique
- **UTE C18-550** : Recueil d'instructions générales de sécurité

### Outils recommandés

- **Multimètre** : Fluke 117 ou équivalent
- **Testeur de continuité** : Kyoritsu 1030
- **Contrôleur d'isolement** : Megger MFT1552
- **Pince ampèremétrique** : Fluke 323

### Formation continue

- **Habilitation électrique** : Recyclage tous les 3 ans
- **Formations techniques** : Mise à jour des connaissances
- **Veille réglementaire** : Suivi des évolutions normatives

## 📋 Changelog

### Version 1.1 - 31 juillet 2025

#### ✅ Corrections majeures

- **Schémas manquants** : Ajout des protocoles "circuit-surcharge" et "court-circuit"
- **Erreur HTML** : Résolution du problème `<p>` contenant des éléments block (`<div>`, `<ul>`)
- **Gestionnaire Git** : Correction des URLs et noms de projet dans `git-manager.bat`

#### 🚀 Améliorations

- **Documentation** : README complet avec toutes les fonctionnalités
- **Schémas interactifs** : Amélioration des animations et annotations
- **Interface utilisateur** : Optimisation de l'affichage des fiches

#### 🔧 Technique

- **Structure** : Réorganisation des composants schemas
- **Performance** : Optimisation du rendu des SVG
- **Compatibilité** : Correction des problèmes de validation HTML

### Version 1.0 - Juillet 2025

#### 🎉 Version initiale

- **Protocoles de base** : Prise, interrupteur, disjoncteur, différentiel
- **Schémas visuels** : Composants SVG animés
- **Interface responsive** : Compatible mobile et desktop
- **Fiches techniques** : Couleurs des fils et tensions usuelles

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit les changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème :

- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

---

⚡ ElecHelper - Votre assistant électricien de confiance
