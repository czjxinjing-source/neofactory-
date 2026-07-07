import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";
import { Page } from "./components/NavBar";
import { levels } from "./data/levels";
import { modules } from "./data/modules";
import { UserProgress } from "./data/userProgress";
import { EncyclopediaPage } from "./pages/EncyclopediaPage";
import { FunctionPage } from "./pages/FunctionPage";
import { HomePage } from "./pages/HomePage";
import { ModulePage } from "./pages/ModulePage";
import { CoreMode, ModeLandingPage } from "./pages/ModeLandingPage";
import { ProfilePage } from "./pages/ProfilePage";
import { QuestionBankPage } from "./pages/QuestionBankPage";
import { QuizPage } from "./pages/QuizPage";
import { WrongBookPage } from "./pages/WrongBookPage";
import { ensureRepairEvent } from "./utils/localData";
import { loadProgress } from "./utils/storage";

type Route =
  | { page: Page }
  | { page: "mode"; mode: CoreMode }
  | { page: "function"; mode: CoreMode; moduleId: string; fromMode?: CoreMode }
  | { page: "module"; moduleId: string; initialMode?: CoreMode | "levels"; fromMode?: CoreMode }
  | { page: "quiz"; moduleId: string; levelId: string; repair?: boolean };

export const App = () => {
  const [route, setRoute] = useState<Route>({ page: "home" });
  const [userProgress, setUserProgress] = useState<UserProgress>(() => loadProgress());

  useEffect(() => {
    const onStorage = () => setUserProgress(loadProgress());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    setUserProgress((current) => ensureRepairEvent(current));
  }, []);

  const currentPage: Page = route.page === "module" || route.page === "quiz" || route.page === "mode" || route.page === "function" ? "modules" : route.page;
  const selectedModule = "moduleId" in route ? modules.find((item) => item.id === route.moduleId) : undefined;
  const selectedLevel = route.page === "quiz" ? levels.find((item) => item.id === route.levelId) : undefined;

  const handleNavigate = (page: Page) => setRoute({ page });
  const handleEnterModule = (moduleId: string, initialMode: CoreMode | "levels" = "reading", fromMode?: CoreMode) =>
    setRoute({ page: "module", moduleId, initialMode, fromMode });
  const handleOpenMode = (mode: CoreMode) => setRoute({ page: "mode", mode });
  const handleOpenFunction = (mode: CoreMode, moduleId: string, fromMode?: CoreMode) =>
    setRoute({ page: "function", mode, moduleId, fromMode });
  const handleQuickPractice = (moduleId: string) => handleOpenFunction("practice", moduleId);
  const handleUrgentRepair = (moduleId: string) => handleOpenFunction("repair", moduleId);
  const handleStartRepair = (moduleId: string) => {
    const firstLevel = levels.find((item) => item.moduleId === moduleId) ?? levels[0];
    setRoute({ page: "quiz", moduleId, levelId: firstLevel.id, repair: true });
  };

  let content = (
    <HomePage
      userProgress={userProgress}
      onQuickPractice={handleQuickPractice}
      onUrgentRepair={handleUrgentRepair}
      onOpenMode={handleOpenMode}
      onOpenAreaMode={handleOpenFunction}
    />
  );

  if (route.page === "modules") {
    content = (
      <HomePage
        userProgress={userProgress}
        onQuickPractice={handleQuickPractice}
        onUrgentRepair={handleUrgentRepair}
        onOpenMode={handleOpenMode}
        onOpenAreaMode={handleOpenFunction}
      />
    );
  }

  if (route.page === "mode") {
    content = (
      <ModeLandingPage
        mode={route.mode}
        userProgress={userProgress}
        onBack={() => setRoute({ page: "home" })}
        onSelectModule={(moduleId) => handleOpenFunction(route.mode, moduleId, route.mode)}
      />
    );
  }

  if (route.page === "function" && selectedModule) {
    content = (
      <FunctionPage
        mode={route.mode}
        module={selectedModule}
        userProgress={userProgress}
        onBack={() => (route.fromMode ? setRoute({ page: "mode", mode: route.fromMode }) : setRoute({ page: "home" }))}
        onHome={() => setRoute({ page: "home" })}
        onProgressChange={setUserProgress}
      />
    );
  }

  if (route.page === "module" && selectedModule) {
    content = (
      <ModulePage
        module={selectedModule}
        userProgress={userProgress}
        onBack={() => (route.fromMode ? setRoute({ page: "mode", mode: route.fromMode }) : setRoute({ page: "home" }))}
        onStartLevel={(levelId) => setRoute({ page: "quiz", moduleId: selectedModule.id, levelId })}
        onProgressChange={setUserProgress}
        initialMode={route.initialMode}
      />
    );
  }

  if (route.page === "quiz" && selectedModule && selectedLevel) {
    content = (
      <QuizPage
        level={selectedLevel}
        module={selectedModule}
        userProgress={userProgress}
        repairAttempt={route.repair}
        onProgressChange={setUserProgress}
        onBack={() => setRoute({ page: "module", moduleId: selectedModule.id })}
        onHome={() => setRoute({ page: "home" })}
      />
    );
  }

  if (route.page === "encyclopedia") {
    content = <EncyclopediaPage userProgress={userProgress} />;
  }

  if (route.page === "wrongbook") {
    content = <WrongBookPage userProgress={userProgress} onProgressChange={setUserProgress} onPractice={(moduleId) => handleOpenFunction("practice", moduleId)} />;
  }

  if (route.page === "profile") {
    content = <ProfilePage userProgress={userProgress} onProgressChange={setUserProgress} />;
  }

  if (route.page === "questionbank") {
    content = <QuestionBankPage />;
  }

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {content}
    </Layout>
  );
};
